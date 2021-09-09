// import gql from 'graphql-tag';
import { gql } from '@apollo/client';

export const GET_POKEMONS = gql`
    query pokemons($limit: Int, $offset: Int) {
        pokemons(limit: $limit, offset: $offset) {
        count
        next
        previous
        status
        message
        results {
            id
            url
            name 
            image
            artwork 
            dreamworld
            }
        }
    }
`;

export const GET_DETAILS = gql`
    query pokemon($name: String!) {
        pokemon(name: $name) {
        id
        name
        abilities {
            ability {
            name
            }
            is_hidden
        }
        base_experience
        height
        weight
        moves {
            move {
            name
            }
        }
        types {
            type {
            name
            }
        
        }
        sprites {
            front_default
        }
        stats {
            base_stat
            effort
            stat {
                name
            }
        }
        message
        status
        }
    }
`;