import { Component , OnInit} from '@angular/core';
import * as moment from 'moment';
import { Ifiles } from './shared/model/files';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  
  title = `Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa tempore cum alias ipsam. Ducimus eos iste veniam! Quod
  dolore animi necessitatibus voluptatum assumenda atque. Aliquam ducimus rerum recusandae architecto dolor ad
  repellendus illo consequuntur officiis hic. Unde libero dignissimos provident aperiam illo minus, rerum eaque quae
  necessitatibus vel est recusandae.`;

  public course = {
    title : 'MEAN Stack',
    students : 1234567,
    rating : 4.945,
    price : 198.98,
    releaseDate : new Date(2020, 1, 26)
  }

  public filesArray !: Ifiles[] 

  public momentTime = moment("20201031", "YYYYMMDD");


  ngOnInit(): void {
    this.filesArray = [
      {
        name : 'Form 16',
        size : 2255998,
        type : 'pdf'
      },
      {
        name : 'Salary Slips',
        size : 8255889,
        type : 'pdf'
      },
      {
        name : 'Exp letter',
        size : 2255998,
        type : 'pdf'
      }
    ]
  }
}
