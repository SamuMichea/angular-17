import { Component } from '@angular/core';

@Component({
  selector: 'app-comments',
  standalone: true,
  imports: [],
  template: `
    <h3>Comentarios de lo que sea</h3>
    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQdXQEy4ZOtAhZTD_UrmF4Sf3G-5SGL4m8hcQ&s">
    <p>
      Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fugiat illum, neque vel suscipit magni modi nulla hic asperiores esse aliquam est quibusdam doloremque repellat eveniet, corrupti porro. Inventore, vel officia!
    </p>
  `,
  styles: `
    img {
      width: 100%;
      height: auto
    }
  `
})
export class CommentsComponent {

}
