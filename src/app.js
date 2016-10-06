export class App {
  constructor() {
    this.message = 'Todos';
    this.tab = [{id:"0",title:"Hey",checked:false},{id:"1",title:"Salut",checked:false}];
    this.log ="";
    this.blue ={
      background:'grey'
    };
  }
  
  add(){
    this.tab.push({id:this.tab.length,title:this.login,checked:false});
  }

  remove(t){
    this.tab.splice(this.indexxOf(t),1);

  }

  indexxOf(t){
    for(var i = 0; i < this.tab.length; i++){
      if(this.tab[i].title == t){
        return i;
      }
    }
    return -1;
  }
}
 