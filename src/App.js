import './App.css';
import React, {useEffect} from 'react'
import Form from './Form';
import List from './List';
import { connect } from 'react-redux';
import * as actions from './store/index'
import Loading from './Loading'


function App({onFetchData, loading}) {
  useEffect(() => {
    onFetchData();
  }, [onFetchData])

  if (loading) {
    return (
      <main>
      <header>TODO</header>
      <Loading/>
    </main>
    )
  }

  return (
    <main>
      <header>TODO</header>
      <Form/>
      <List/>
    </main>
  );
}

const mapDispatchToProps = dispatch => {
  return {
    onFetchData: () => dispatch(actions.fetchData())
  }
}

const mapStateToProps = state => {
  return {
    loading: state.loading
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
