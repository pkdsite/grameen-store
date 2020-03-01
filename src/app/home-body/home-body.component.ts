import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-body',
  templateUrl: './home-body.component.html',
  styleUrls: ['./home-body.component.css']
})
export class HomeBodyComponent implements OnInit {

  constructor() {
    // this.function();
  }
  // function = () => {
  //   let a = [1,2,9,8,4,6,7,5,3];
  //   let sortedArray = a.sort();
  //   let medium = Math.floor(sortedArray.length / 2);
    
  //   let lA = sortedArray.slice(0, medium-1);
  //   let rA = sortedArray.slice(medium);
  //   let i = 0;
  //   let j = rA.length - 1;
  //   let k = 0;
  //   let A = [];
  //   while (i < lA.length && j > -1) {
  //     A[k] = rA[j];
  //     k++; j--;
  //     A[k] = lA[i];
  //     k++; i++;
  //   }
  //   while (i < lA.length) {
  //     A[k++] = lA[i++];
  //   }
  //   while (j > -1) {
  //     A[k++] = rA[j--];
  //   }
  //   console.log(A);
  // };
  

  ngOnInit() {
  }

}
