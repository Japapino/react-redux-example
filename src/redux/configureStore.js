import { createStore, applyMiddleware, compose } from "redux";
import rootReducer from "./reducers";
import reduxImmutableStoreInvariant from "redux-immutable-state-invariant";

export default function configureStore(initialState) {
  const composeEnhancers =
    window.__REDUX__DEVTOOLS_EXTENSION_COMPOSE__ || compose; //adds support for redux devtools
  return createStore(
    rootReducer,
    initialState,
    composeEnhancers(applyMiddleware(reduxImmutableStoreInvariant())) //warns us if we accidentally update any state in the redux store
  );
}
