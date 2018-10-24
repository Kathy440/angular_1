import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'projet-un';

  posts = [
    {
      title: 'Mon premier post',
      content: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Doloremque a blanditiis perspiciatis sed exercitationem dolorem natus optio non vitae fugit rem, magni asperiores dolores nihil, consequatur repellendus sit quod ipsa.',
      loveIts: '5',
      create_at: Date
    },
    {
      title: 'Mon deuxième post',
      content: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Doloremque a blanditiis perspiciatis sed exercitationem dolorem natus optio non vitae fugit rem, magni asperiores dolores nihil, consequatur repellendus sit quod ipsa.',
      loveIts: '-5',
      create_at: Date
    },
    {
      title: 'Encore un post',
      content: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Doloremque a blanditiis perspiciatis sed exercitationem dolorem natus optio non vitae fugit rem, magni asperiores dolores nihil, consequatur repellendus sit quod ipsa.',
      loveIts: '2',
      create_at: Date
    },

  ]
}
