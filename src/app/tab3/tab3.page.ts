import { Component, ViewChild, OnInit } from '@angular/core';
import { Source } from 'src/app/interfaces/sources';
import { IonInfiniteScroll, IonSegment, IonSelect } from '@ionic/angular';
import { NoticiasService } from '../services/noticias.service';
import { Article } from '../interfaces/interfaces';



@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page implements OnInit {
  @ViewChild(IonSelect) select: IonSelect;
  fuentes = ['abc-news','bloomberg','bbc-sport','cbc-news','cnbc','cnn','cnn-es','el-mundo','focus','globo','ign','la-gaceta','mirror','time','wired'];
  
  noticias: Article[] = [];

  sources: Source[] = [];

  constructor(private noticiasService: NoticiasService) {}

  ngOnInit(){
   
     this.select.value = this.fuentes[0]
     this.cargarFuentes(this.select.value)
  }
  cambioFuente( event ){

    this.noticias=[];
    console.log(event.detail.value);

    this.cargarFuentes(event.detail.value);
  }

  cargarFuentes( font: string){

    this.noticiasService.getNoticiasSources(font)
    .subscribe(resp => {
      console.log(resp);
      this.noticias.push(...resp.articles);
    });
  }

  fetchSources() {
    this.noticiasService.getSources()
    .subscribe(providers => {
      console.log("Cagadas...", providers);
      this.sources.push(...providers.sources);
    });
  }
}
