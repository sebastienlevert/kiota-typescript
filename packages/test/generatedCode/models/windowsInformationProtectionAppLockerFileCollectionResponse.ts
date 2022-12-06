import {BaseCollectionPaginationCountResponse, WindowsInformationProtectionAppLockerFile} from './index';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface WindowsInformationProtectionAppLockerFileCollectionResponse extends BaseCollectionPaginationCountResponse, Partial<Parsable> {
    /** The value property */
    value?: WindowsInformationProtectionAppLockerFile[];
}
