import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { NullStringLengthPipe } from './pipes/nullStringLength.pipe';

@NgModule({
    declarations: [NullStringLengthPipe],
    imports: [
        CommonModule
    ],
    // providers: [NullStringLengthPipe],
    exports: [NullStringLengthPipe]
})

export class HelpersModule { }
