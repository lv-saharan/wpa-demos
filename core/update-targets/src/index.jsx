import { h, render, uniqueTag, Component } from 'wpa'


const App1 = uniqueTag(class extends Component {
    static defaultProps={
        count:0
    }
    static propTypes={
        count:Number
    }
    render(props) {
        return <>
            {props.name} : {props.count} :  {new Date().toUTCString()}
        </>
    }
})


const App = uniqueTag(class extends Component {
    count = 0
    render() {

        return <div id="main">
            <h1>Update方法需要注意使用，很多时候我们不需要更新那么多，并且默认情况下重新绑定的属性会转换成Props。就是Update(ignoreAttr:true)</h1>
            <div id="part1" >
                <App1 name="part1" count={this.count}></App1>
            </div>
            <div id="part2"  >
                <App1 name="part2" count={this.count}></App1>
            </div>

            <button onClick={evt => {
                this.count++
                this.updateTargets('#part1')
            }}>Update Part1</button>
            <button onClick={evt => {
                this.count++

                this.updateTargets('#part2')
            }}>Update Part2</button>

            <button onClick={evt => {
                this.updateTargets('#part2,#part1')
            }}>Update Both</button>

            <button onClick={evt => {
                this.update()
            }}>Update</button>
        </div>
    }
})

render(<App />, 'body')