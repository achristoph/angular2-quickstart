import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import '../assets/css/styles.css';
import 'rxjs/add/operator/switchMap';

@Component({
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {
	
	constructor(private route: ActivatedRoute) {
	}

	ngOnInit() {
		const url: Observable<string> = this.route.url.map(segments => segments.join(''));
		url.subscribe((p) => {
		});
	}

}