import { Component, OnInit } from '@angular/core';
import { persona } from 'src/app/modelo/persona.modelo';
import { PersonaService } from 'src/app/service/persona.service';

@Component({
  selector: 'SobreMi',
  templateUrl: './sobreMi.component.html',
  styleUrls: ['./sobreMi.component.css']
})

export class SobreMi implements OnInit {

  persona: persona = new persona("","","");

  constructor(public personaService: PersonaService) { }
  
  ngOnInit(): void {
    this.personaService.getPersona().subscribe(data => { this.persona = data })
  }

}