import {BaseCollectionPaginationCountResponse, WindowsInformationProtectionResourceCollection} from './index';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface WindowsInformationProtectionResourceCollectionCollectionResponse extends BaseCollectionPaginationCountResponse, Partial<Parsable> {
    /** The value property */
    value?: WindowsInformationProtectionResourceCollection[];
}
