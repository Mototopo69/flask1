import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
@Injectable({
providedIn: 'root',
})
export class FlaskService {
constructor(private http: HttpClient) {}
getProfilo() {
return this.http.get('https://orange-happiness-5gv6jpp74x962xx6-5000.app.github.dev/profilo');
}
}