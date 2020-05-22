import React, { Component } from 'react'
import counterpart from 'counterpart';
import Translate from 'react-translate-component';
import en from './lan/en';
import sp from './lan/sp';

counterpart.registerTranslations('en', en);
counterpart.registerTranslations('sp', sp);



const Link = (props) => {
    return <Translate content={props.content} component="a" href="//google.com" target="_blank"/>
}

export default class Muli extends Component {

    state = {
        lang : 'en'
    }
    onLangChange = (e) => {
        this.setState({
            lang : e.target.value
        });
        counterpart.setLocale(e.target.value);
    }
    render() {
        const link = <Link content="link"/>;
        const plachldr = counterpart.translate('placeholder');
        const h2 = counterpart.translate('h2');
        return (
            <div>
                <select value={this.state.lang} onChange={this.onLangChange}>
                    <option value="en">en</option>
                    <option value="sp">sp</option>
                </select>
                <Translate content="title" component="h1" className="header"/>
                <h2>{h2}</h2>
                <Translate content="pargs.p1" component="p" unsafe={true}/>
                <Translate content="pargs.p2" component="p" with={{link}}/>


                <Translate component="input" type="text" attributes={{placeholder : 'placeholder'}}/>
                <input type="text" placeholder={plachldr}/>
            </div>
        )
    }
}
