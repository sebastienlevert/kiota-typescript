import {Entity, PrintUsageByPrinter, PrintUsageByUser, SecurityReportsRoot} from './index';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface ReportRoot extends Entity, Partial<Parsable> {
    /** The dailyPrintUsageByPrinter property */
    dailyPrintUsageByPrinter?: PrintUsageByPrinter[];
    /** The dailyPrintUsageByUser property */
    dailyPrintUsageByUser?: PrintUsageByUser[];
    /** The monthlyPrintUsageByPrinter property */
    monthlyPrintUsageByPrinter?: PrintUsageByPrinter[];
    /** The monthlyPrintUsageByUser property */
    monthlyPrintUsageByUser?: PrintUsageByUser[];
    /** The security property */
    security?: SecurityReportsRoot;
}
