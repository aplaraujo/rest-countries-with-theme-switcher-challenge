import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
    name: 'regionFilter'
})

export class RegionFilterPipe implements PipeTransform {
    transform(list: any[], value: string) {
        return value ? list.filter(item => item.region === value) : list;
    }
}