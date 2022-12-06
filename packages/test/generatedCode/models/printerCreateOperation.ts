import {Printer, PrintOperation} from './index';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface PrinterCreateOperation extends Partial<Parsable>, PrintOperation {
    /** The signed certificate created during the registration process. Read-only. */
    certificate?: string;
    /** The created printer entity. Read-only. */
    printer?: Printer;
}
