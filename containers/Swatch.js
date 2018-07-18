import React, {Component} from 'react';
import styles from './app.css';

export default class App extends Component {
  constructor(props) {
    super(props)
  }

  componentDidMount() {

  }

  componentWillUnmount() {

  }

  render() {
    return (
      <div className={styles.swatch_container}>
          <div className={styles.swatch} style={{backgroundColor: this.props.color}}></div>
          <div className={styles.swatch_label}>{this.props.label}</div>
      </div>
    )
  }
}
