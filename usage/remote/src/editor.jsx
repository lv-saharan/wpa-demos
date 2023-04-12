import { h, Component, uniqueTag } from "wpa";

const Part = uniqueTag(
  class extends Component {
    content = "hello！";
    async install() {
      const templateRoot = new URL("./edit-templates/", import.meta.url).href
      this.templates = (await fetch(new URL("./edit-templates/templates.json", import.meta.url).href).then(r => r.json())).map(template => {
        if (template.url) {
          template.url = new URL(template.url, templateRoot).href
        }
        return template
      })

    }
    get toolbar() {
      return "undo redo searchreplace | bold italic underline strikethrough subscript superscript | fontfamily fontsize blocks styles lineheight | alignleft aligncenter alignright alignjustify | outdent indent |  numlist bullist | forecolor backcolor removeformat | pagebreak hr insertdatetime | selectall cut copy paste pastetext |charmap emoticons | quickimage batchimage batchimage2 quicktable |insertfile image media table template link unlink anchor codesample | ltr rtl | visualblocks wordcount code fullscreen  preview print"
    }
    registerButtons(editor) {
      editor.ui.registry.addButton('batchImage', {
        icon: 'insert-time',
        tooltip: 'Insert Current Date',
        enabled: false,
        onAction: (_) => {
          tinymce.activeEditor.windowManager.open({
            title: '選擇圖片', // The dialog's title - displayed in the dialog header
            size: "large",
            body: {
              type: 'panel', // The root body type - a Panel or TabPanel
              items: [ // A list of panel components
                {
                  type: "grid",
                  columns: 6,
                  items: Array.from({ length: 200 }).map((v, index) => {
                    return {
                      type: "panel",
                      items: [{
                        type: 'htmlpanel', // component type
                        html: '<img   style="width:100px;height:100px;object-fit: contain;" src="https://tse1-mm.cn.bing.net/th/id/OIP-C.gAwrrAwnrp1bDE8Z-1ibmQHaJU?w=134&h=180&c=7&r=0&o=5&dpr=2.07&pid=1.7">', // image URL
                      },
                      {
                        type: 'checkbox', // component type
                        name: 'images-' + index, // identifier
                        label: 'image ' + index, // text for the label
                      }]
                    }
                  })
                }
              ]
            },
            buttons: [ // A list of footer buttons
              {
                type: 'submit',
                text: 'OK'
              }
            ],
            onSubmit: (api) => {
              const data = api.getData();



              tinymce.activeEditor.execCommand('mceInsertContent', false, `<p>My ${pet}'s name is: <strong>${data.catdata}</strong></p>`);
              api.close();
            }
          });
        },
        onSetup: (buttonApi) => {
          const editorEventCallback = (eventApi) => {
            buttonApi.setEnabled(eventApi.element.nodeName.toLowerCase() !== 'time');
          };
          editor.on('NodeChange', editorEventCallback);
          return () => editor.off('NodeChange', editorEventCallback);
        }
      });


      editor.ui.registry.addButton('batchImage2', {
        icon: 'insert-time',
        tooltip: 'Insert Current Date',
        enabled: false,
        onAction: (_) => {
          tinymce.activeEditor.windowManager.openUrl({
            title: '圖片瀏覽',
            url: new URL("./images.html", import.meta.url).href,
            onMessage: () => {

            }
          });
        },
        onSetup: (buttonApi) => {
          const editorEventCallback = (eventApi) => {
            buttonApi.setEnabled(true);
          };
          editor.on('NodeChange', editorEventCallback);
          return () => editor.off('NodeChange', editorEventCallback);
        }
      });
    }
    uploadImage(blobInfo, progress) {
      return Promise.resolve("hahah/lllsl.jpg")
      return new Promise((resolve, reject) => {
        const xhr = new XMLHttpRequest();
        xhr.withCredentials = false;

        xhr.open('POST', 'postAcceptor.php');

        xhr.upload.onprogress = (e) => {
          progress(e.loaded / e.total * 100);
        };

        xhr.onload = () => {
          if (xhr.status === 403) {
            reject({ message: 'HTTP Error: ' + xhr.status, remove: true });
            return;
          }

          if (xhr.status < 200 || xhr.status >= 300) {
            reject('HTTP Error: ' + xhr.status);
            return;
          }

          const json = JSON.parse(xhr.responseText);

          if (!json || typeof json.location != 'string') {
            reject('Invalid JSON: ' + xhr.responseText);
            return;
          }

          resolve(json.location);
        };

        xhr.onerror = () => {
          reject('Image upload failed due to a XHR Transport error. Code: ' + xhr.status);
        };

        const formData = new FormData();
        formData.append('file', blobInfo.blob(), blobInfo.filename());

        xhr.send(formData);
      })
    }
    installed() {
      // wpa.ui.tinymce.use().then((...args) => {
      //   console.log("using tinymce", args)
      //   const editorConfig = {
      //     target: this.$("#editor"),
      //     menubar: false,
      //     inline: true,
      //     plugins: [
      //       'lists',
      //       'autolink'
      //     ],
      //     toolbar: 'undo redo | bold italic underline',
      //     valid_elements: 'strong,em,span[style],a[href]',
      //     valid_styles: {
      //       '*': 'font-size,font-family,color,text-decoration,text-align'
      //     },
      //   };
      //   tinymce.init(editorConfig);
      // })
    }
    render() {
      return (
        <div>
          <fieldset>
            <legend>
              default
            </legend>
            <h1 id="editor">
              这是一段编辑器的测试,测试显示inline模式在webcomponent中暂不可用
            </h1>
            <div style="height:20em">
              inline:
              <wp-tinymce

                toolbar={['undo redo | bold italic underline | fontfamily fontsize',
                  'forecolor backcolor | alignleft aligncenter alignright alignfull | numlist bullist outdent indent'
                ]}
                valid-elements='strong,em,span[style],a[href]'
                valid-styles={{ '*': 'font-size,font-family,color,text-decoration,text-align' }}
                value="<h1>default</h1>"
                inline
              ></wp-tinymce>
            </div>
            <wp-tinymce
              style="border:solid 1px #ccc;height:500px;z-index:9999"
              toolbar={this.toolbar}
              o-model="content"
              templates={this.templates}
              image-uploadtab
              images-upload-handler={this.uploadImage.bind(this)}
              file-picker-callback={(callback, value, meta) => {
                const dialogApi = tinymce.activeEditor.windowManager.open({
                  title: '選擇圖片', // The dialog's title - displayed in the dialog header
                  size: "large",
                  body: {
                    type: 'panel', // The root body type - a Panel or TabPanel
                    items: [ // A list of panel components
                      {
                        type: "grid",
                        columns: 6,
                        items: Array.from({ length: 20 }).map((v, index) => {
                          return {
                            type: "panel",
                            items: [{
                              type: 'htmlpanel', // component type
                              html: '<img   style="width:100px;height:100px;object-fit: contain;" src="https://tse1-mm.cn.bing.net/th/id/OIP-C.gAwrrAwnrp1bDE8Z-1ibmQHaJU?w=134&h=180&c=7&r=0&o=5&dpr=2.07&pid=1.7">', // image URL
                            },
                            {
                              type: 'checkbox', // component type
                              name: 'images-' + index, // identifier
                              label: 'image ' + index, // text for the label
                            }]
                          }
                        })
                      }
                    ]
                  },
                  buttons: [ // A list of footer buttons
                    {
                      type: 'submit',
                      text: 'OK'
                    }
                  ],
                  onSubmit: (api) => {
                    const data = api.getData();
                    const pet = data.isdog ? 'dog' : 'cat';

                    tinymce.activeEditor.execCommand('mceInsertContent', false, `<p>My ${pet}'s name is: <strong>${data.catdata}</strong></p>`);
                    api.close();
                  }
                });

                // Provide file and text for the link dialog
                if (meta.filetype == 'file') {
                  callback('mypage.html', { text: 'My text' });
                }

                // Provide image and alt text for the image dialog
                if (meta.filetype == 'image') {
                  callback('myimage.jpg', { alt: 'My alt text' });
                }

                // Provide alternative source and posted for the media dialog
                if (meta.filetype == 'media') {
                  callback('movie.mp4', { source2: 'alt.ogg', poster: 'image.jpg' });
                }
              }}
              image-list={[

                { title: '標題圖片', value: 'cat.png' },
                {
                  title: '內容圖片',
                  menu: [
                    { title: 'Alaskan Husky', value: 'husky.jpg' },
                    { title: 'Dingo', value: 'dingo.png' },
                    { title: 'Swedish Lapphund', value: 'swedish_lapphund.gif' }
                  ]
                }

              ]}
              onChange={(evt, target) => {
                this.content = target.value;
                this.$("#output").value = this.content;
              }}
              onSetup={evt => {
                this.registerButtons(evt.detail.editor)
              }}
            ></wp-tinymce>
          </fieldset >
          <hr />
          <output>
            <textarea style="width:100%;height:300px" id="output">{this.content}</textarea>
          </output>
        </div >
      );
    }
  }
);

export default <Part />;
