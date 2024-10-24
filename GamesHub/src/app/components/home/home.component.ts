import { Component, ElementRef, HostListener, OnInit, ViewChild, viewChild } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit{
  @ViewChild('translateEle') translateEle!:ElementRef<HTMLElement>
  @ViewChild('translateEle2') translateEle2!:ElementRef<HTMLElement>  
  @ViewChild('HomeTranslateEle') HomeTranslateEle!:ElementRef<HTMLElement>  
  @ViewChild('HomeTranslateEle2') HomeTranslateEle2!:ElementRef<HTMLElement>  
  private scrolled:boolean = false;
  constructor(
    
  ){
  }

  homeAnimation(){
    this.HomeTranslateEle.nativeElement.classList.remove('home-item1')
    this.HomeTranslateEle.nativeElement.classList.add('translate')
    this.HomeTranslateEle2.nativeElement.classList.remove('home-item2')
    this.HomeTranslateEle2.nativeElement.classList.add('translate')
  }
  ngOnInit(): void {
     setTimeout(()=>{
      this.homeAnimation();
     } , 300)
    }
   @HostListener('window:scroll' , [])
  onWindowScroll():void{
    let scrollDistY =scrollY;
    if(scrollDistY > 500){
      this.translateEle.nativeElement.classList.add('translate')
      this.translateEle.nativeElement.classList.remove('services-item1')
      this.translateEle2.nativeElement.classList.add('translate')
      this.translateEle2.nativeElement.classList.remove('services-item2')
    }
  } 
}

