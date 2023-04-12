import { h, render, Component, uniqueTag } from "wpa";

const App3 = uniqueTag(class extends Component {
    store = {
        name: 'sa'
    }
    render() {
        return <h3>
            App3  {this.store.name}
        </h3>
    }
})

const App2 = uniqueTag(class extends Component {
    store = {
        name: 'saha'
    }
    render() {
        return <>
            <h3>
                App2 {this.store.name}
            </h3>
            <App3 />
        </>
    }
})

const App1 = uniqueTag(class extends Component {

    render() {
        return <>
            <h3>
                App1 {this.store.name}
            </h3>
            <App2 />
        </>
    }
})

render(<App1 />, "body", {
    name: 'saharan'
})