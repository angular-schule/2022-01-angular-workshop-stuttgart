export class Customer {
    private foo: string = 'Hallo';
    bar: string;

    constructor(public id: number) {
        this.bar = 'Hallo';
    }

    fooBar(x: string): string {
        setTimeout(() => {
            console.log('ID', this.id);
        }, 2000);

        return '';
    }
}

export function aaa() {}
export const bbb = 5;


function testfn() {}
console.log('CCCC');