import { Component, EventEmitter, Output} from '@angular/core';

@Component({
  selector: 'app-post-create',
  templateUrl: './post-create.component.html',
  styleUrls: ['./post-create.component.scss']
})
export class PostCreateComponent {

  enteredContent = '';
  enteredTitle = '';
  @Output() postCreated = new EventEmitter();


  onAddPost() {
    const post = {
      title: this.enteredTitle,
      content: this.enteredContent,
    };
    console.log(post);
    this.postCreated.emit(post);
  }


}
 