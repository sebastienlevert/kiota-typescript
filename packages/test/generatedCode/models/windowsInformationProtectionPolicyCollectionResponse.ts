import {BaseCollectionPaginationCountResponse, WindowsInformationProtectionPolicy} from './index';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface WindowsInformationProtectionPolicyCollectionResponse extends BaseCollectionPaginationCountResponse, Partial<Parsable> {
    /** The value property */
    value?: WindowsInformationProtectionPolicy[];
}
