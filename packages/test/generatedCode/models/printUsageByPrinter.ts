import {PrintUsage} from './index';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface PrintUsageByPrinter extends Partial<Parsable>, PrintUsage {
    /** The printerId property */
    printerId?: string;
}
