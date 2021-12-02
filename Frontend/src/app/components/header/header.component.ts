import { Component, OnInit, Input} from '@angular/core';

import { Router, ActivatedRoute, Params} from '@angular/router';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

public searchString: string;

@Input() buscador:string;
@Input() logo:string;


  constructor(

  private _router: Router,
  private _route: ActivatedRoute
  ) { }

  ngOnInit(): void {
  }

goSearch(){
	this._router.navigate(['/buscar', this.searchString]);
}
}
