import {Component, Input, OnInit} from '@angular/core';
import { POST_TYPES } from './constants/post-constants';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})
export class PostComponent implements OnInit {
  @Input() post: any;

  public postTypes = POST_TYPES;

  constructor() { }

  ngOnInit() {
  }

}
