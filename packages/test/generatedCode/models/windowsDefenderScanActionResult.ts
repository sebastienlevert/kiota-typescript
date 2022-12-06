import {DeviceActionResult} from './index';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface WindowsDefenderScanActionResult extends DeviceActionResult, Partial<Parsable> {
    /** Scan type either full scan or quick scan */
    scanType?: string;
}
