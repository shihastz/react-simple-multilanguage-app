export const dynamicDecrement = (event, component) => {
    return component.setState({
       // [event.target.name] : event.target.value,
       counter : event.target.counter-1
    });
};