import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import PokemonLists from "./pages/PokemonLists";
import PokemonDetail from "./pages/PokemonDetail";
import MyPokemonList from "./pages/MyPokemonList";
import Notfound from "./pages/Notfound";

// import { ApolloClient } from "apollo-boost";
// import { ApolloProvider } from "@apollo/react-hooks";
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  HttpLink,
  from,
  // useQuery,
  // gql
} from "@apollo/client";
import { onError } from '@apollo/client/link/error'
import styled from "@emotion/styled";
import { MyPokemonProvider } from "./PokemonContext";
import { ImageProvider } from "./ImageContext";
import Navbar from "./components/navbar/Navbar";


const errorLink = onError(({ graphqlErrors, networkError}) =>{
  if(graphqlErrors){
    graphqlErrors.map(({message, location, path})=>{
      alert(`Graphql error ${message}`)
    });
  }
});

const link = from([
  errorLink,
  new HttpLink({ uri:'https://graphql-pokeapi.vercel.app/api/graphql' })

]);

const client = new ApolloClient({
  cache: new InMemoryCache(),
  link: link
  
});


function App() {

  
  return (
    <>
    <MyPokemonProvider>
      <ImageProvider>

    
        <ApolloProvider client={client}>
          
          <Router>
            <Navbar/>
            <Switch>
              <Route exact path="/" component={PokemonLists}/>
              <Route path="/details/:name" component={PokemonDetail}/>
              {/* <Route path="/details" component={PokemonDetail}/> */}
              <Route path="/my_pokemon_list" component={MyPokemonList}/>
              <Route component={Notfound}/>
            </Switch>
          </Router>
        </ApolloProvider>
      </ImageProvider>
    </MyPokemonProvider>
    </>
  );
}

export default App;
