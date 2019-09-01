import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { SharedModule } from '../shared/shared.module';

import { ShoppinglistComponent } from './shoppinglist.component';
import { ShoppingEditComponent } from './shopping-edit/shopping-edit.component';




@NgModule ({
    declarations : [
    ShoppinglistComponent,
    ShoppingEditComponent,
],

imports: [
    SharedModule,
    FormsModule,
    RouterModule.forChild([
        { path: '' , component: ShoppinglistComponent},
    ])
]
})
export class ShoppingListModule {}