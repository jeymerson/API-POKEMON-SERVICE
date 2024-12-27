import { NgFor } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { PokemonService } from '../../services/pokemon.service';
import { PokemonData } from '../../models/pokemonData';


@Component({
  selector: 'app-card',
  standalone: true,
  imports: [NgFor],
  templateUrl: './card.component.html',
  styleUrl: './card.component.css'
})
export class CardComponent implements OnInit {
  imagem: string =
  `https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQePiIbl7CLXFa_tPyBZTM6pQN54sw4oOAACQ&s`
  name: string = `Charmander`
  attributesTypes: string[] = [`FIRE`, 'ROCK']
  pokemon:PokemonData
  constructor(private service: PokemonService) {
  this.pokemon = {id: 0, name: "", sprites: {front_default: ''},types:[]}

  }
  ngOnInit(): void {
    this.getPokemon('pikachu')
    }

    getPokemon(searchName:string){
      this.service.getPokemon(searchName).subscribe(
        {
          next: (res) => {
            this.pokemon = {
              id: res.id,
              name: res.name,
              sprites: res.sprites,
              types: res.types
            }
          },
          error: (err) => console.log("The pokemon not found")
        }
      )
    }



}
