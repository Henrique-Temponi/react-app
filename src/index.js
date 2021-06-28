import ReactDom from 'react-dom'

function Welcome(props) {
    return <h1>Hello, {props.name}</h1>;
}

const element = <Welcome name="sfffs" />
ReactDom.render(element, document.getElementById('root'));