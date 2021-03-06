import { Component, OnInit } from '@angular/core'
import { IProduct } from './product';
import { ProductService } from './product.service';

@Component({
    templateUrl: './product-list.component.html',
    styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
    pageTitle: string = 'Product List';
    showImage: boolean;
    imageWidth: number = 50;
    imageMargin: number = 2;
    errorMessage: string;
    filteredProducts: IProduct[];
    products: IProduct[];
    includeDetail: boolean = true;
    msgFromParent: string;
     
    constructor(private productService: ProductService) { }

    ngOnInit(): void {
        this.productService.getProducts().subscribe(
            (products: IProduct[]) => {
                this.products = products;
                this.performFilter();
                console.log("===> Can't reference #filCrit.pageTitle" );
            },
            (error: any) => this.errorMessage = <any>error
        );
    }

    toggleImage(): void {
        this.showImage = !this.showImage;
    }

    performFilter(filterBy?: string): void {
        if (filterBy) {
            this.filteredProducts = this.products.filter((product: IProduct) =>
                product.productName.toLocaleLowerCase().indexOf(filterBy.toLocaleLowerCase()) !== -1);
                this.msgFromParent = "Results filtered ";
        } else {
            this.filteredProducts = this.products;
            this.msgFromParent = "Filters cleared";
        }
    }
}
