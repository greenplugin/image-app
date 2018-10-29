import {Component, OnInit} from '@angular/core';
import {ImageService} from '../image.service';
import {Image} from '../Image';

@Component({
    selector: 'app-images',
    templateUrl: './images.component.html',
    styleUrls: ['./images.component.scss']
})
export class ImagesComponent implements OnInit {
    images: Image[];
    hasMore = true;
    modalPreloader = true;
    selectedImage: Image;

    constructor(private imageService: ImageService) {
    }

    ngOnInit() {
        this.getImages();
    }

    getImages(): void {
        this.hasMore = false;
        this.imageService.getImages().subscribe((images: Image[]) => {
            if (images.length === this.imageService.getPageSize()) {
                this.hasMore = true;
            }
            if (this.images) {
                this.images = this.images.concat(images);
            } else {
                this.images = images;
            }
        });
    }

    openImage(image: Image): void {
        this.modalPreloader = true;
        this.selectedImage = image;
    }

    closeImage(): void {
        this.selectedImage = null;
    }

    hidePreloader(): void {
        this.modalPreloader = false;
    }
}
