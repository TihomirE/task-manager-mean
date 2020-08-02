import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { NullStringLengthPipe } from './pipes/nullStringLength.pipe';
import { PlaceholderHelperService } from './placeholder/placeholder-helper.service';

@NgModule({
    declarations: [NullStringLengthPipe],
    imports: [
        CommonModule
    ],
    providers: [PlaceholderHelperService],
    exports: [NullStringLengthPipe]
})

export class HelpersModule { }
