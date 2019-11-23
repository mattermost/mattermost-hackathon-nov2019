import React, {Component} from 'react';
import PropTypes from 'prop-types';

class Root extends Component {
    state = {
        currentWord: '',
    }

    constructor(props) {
        super(props);
        this.notRead = true;
    }

    async startRead(words) {
        /* eslint-disable no-await-in-loop */
        for (let i = 0; i < words.length; i++) {
            this.setState({currentWord: words[i]});
            if (words[i].includes('.') || words[i].includes('?') || words[i].includes('!')) {
                await this.delay(550);
            } else if (words[i].includes(',') || words[i].includes(':')) {
                await this.delay(400);
            } else if (words[i].length < 3) {
                await this.delay(200);
            } else {
                await this.delay(250);
            }
        }
        /* eslint-enable no-await-in-loop */
        await this.delay(1000);
        this.closeModalWindow();
    }
    async componentDidUpdate() {
        if (this.notRead) {
            if (this.props.post && this.props.post.message) {
                this.notRead = false;
                await this.delay(2050);
                const words = this.props.post.message.split(' ');
                await this.startRead(words);
            }
        }
    }
    async delay(delayInms) {
        return new Promise((resolve) => {
            setTimeout(() => {
                resolve(2);
            }, delayInms);
        });
    }
    closeModalWindow = () => {
        this.notRead = true;
        this.props.close();
    }
    render() {
        const {visible, theme} = this.props;
        if (!visible) {
            return null;
        }
        const style = getStyle(theme);
        return (
            <div
                style={style.backdrop}
                onClick={this.closeModalWindow}
            >
                <div style={style.modal}>
                    <p syle={style.p}>{this.state.currentWord}</p>
                </div>
            </div>
        );
    }
}

Root.propTypes = {
    post: PropTypes.object.isRequired,
    visible: PropTypes.bool.isRequired,
    close: PropTypes.func.isRequired,
    theme: PropTypes.object.isRequired,
};

const getStyle = (theme) => ({
    backdrop: {
        position: 'absolute',
        display: 'flex',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: 'rgba(0, 0, 0, 0.50)',
        zIndex: 2000,
        alignItems: 'center',
        justifyContent: 'center',
    },
    modal: {
        height: '250px',
        width: '400px',
        padding: '1em',
        color: theme.centerChannelColor,
        backgroundColor: theme.centerChannelBg,
        textAlign: 'center',
    },
    p: {
        textAlign: 'center',
        lineHeight: '100px',
        fontSize: '16px',
    },
});

export default Root;
