const { h, define, Component, classNames, uniqueTag, createRef } = wpa;
const { css, uploader } = wpa.ui;
/**
 * @file uploader
 * @see {@link http://wpa.flatweb.net/demos/usage/ui/#/uploader|WPA示例}
 */
const Slot = uniqueTag(
  class extends Component {
    static css = `:host{color:red}`;
    render() {
      return (
        <ul>
          {this.$props.files.map((file) => (
            <li>{file.name}</li>
          ))}
        </ul>
      );
    }
  }
);
const files = [
  {
    name: "demo",
    type: "image/png",
    url: "https://tse1-mm.cn.bing.net/th/id/OIP-C.gAwrrAwnrp1bDE8Z-1ibmQHaJU?w=134&h=180&c=7&r=0&o=5&dpr=2.07&pid=1.7",
    size: 102400
  }
];
const App = uniqueTag(
  class extends Component {
    css = `
    .image{
      width:60px;
      height:60px;
      background-size: contain;
      background-repeat: no-repeat;
      background-position: center center;
      border:solid 1px #ccc;
      
      
    }
    
    `
    imageFile = {

    }
    data = {
      artilceTitle: "news-1",
      titleImages: [
        {
          name: "demo",
          type: "image/png",
          url: "https://tse1-mm.cn.bing.net/th/id/OIP-C.gAwrrAwnrp1bDE8Z-1ibmQHaJU?w=134&h=180&c=7&r=0&o=5&dpr=2.07&pid=1.7",
          size: 102400
        }
      ]
    }
    uploaderRef = createRef()
    render() {
      return (
        <>
          单选 <wp-uploader></wp-uploader>
          <hr />
          单选自定义
          <wp-uploader accept="image/*" files={[this.imageFile]} onSelected={evt => {
            this.imageFile = evt.detail.selected.at(0)
            this.forceUpdate()
          }} >
            <div
              title={this.imageFile.name}
              class="image"
              style={{
                backgroundImage: `url(${this.imageFile.url ?? uploader.creatPreviewUrl(this.imageFile.file)})`,
              }}
              onClick={evt => {
                evt.target.parentNode.open()
              }}
            ></div>
          </wp-uploader>
          <hr />
          多选<wp-uploader files={files} multiple></wp-uploader>
          <hr />
          多选文件列表
          <wp-uploader files={files} multiple template="files" auto-upload action="http://127.0.0.1/upload"></wp-uploader>

          <hr />
          自定义样式

          <ul>
            {this.data.titleImages.map((file, index) => {
              file.url = file.url ?? uploader.creatPreviewUrl(file.file);

              return <li>
                <div
                  key={`title-image-${index}`}
                  title={file.name}
                  class="image"
                  style={{
                    backgroundImage: `url(${file.url})`,
                  }}
                  onClick={evt => {
                    this.uploaderRef.current.open(index)
                  }}
                ></div>
                <div>
                  name:<input o-model={`data.titleImages[${index}].name`}></input>

                </div>
                <button onClick={evt => {
                  this.uploaderRef.current.remove(index)
                }}>remove</button>
              </li>
            })}
          </ul>
          <wp-uploader files={this.data.titleImages} accept="image/*" ref={this.uploaderRef} multiple auto-upload action="http://127.0.0.1/upload" onSelected={evt => {
            this.forceUpdate()
          }}
            onReplaced={evt => {
              this.forceUpdate()
            }}
            onRemove={evt => {
              this.forceUpdate()
            }}
          >
            <button onClick={evt => {
              this.uploaderRef.current.open()
            }}>自定义上传</button>
            <button onClick={evt => [
              alert(JSON.stringify(this.data))
            ]}>show result</button>

          </wp-uploader>

        </>
      );
    }
  }
);

export default (
  <fieldset>
    <legend>Uploader </legend>
    <pre></pre>
    <App />
  </fieldset>
);
