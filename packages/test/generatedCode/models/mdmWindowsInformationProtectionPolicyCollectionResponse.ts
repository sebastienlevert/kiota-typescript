import {BaseCollectionPaginationCountResponse, MdmWindowsInformationProtectionPolicy} from './index';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface MdmWindowsInformationProtectionPolicyCollectionResponse extends BaseCollectionPaginationCountResponse, Partial<Parsable> {
    /** The value property */
    value?: MdmWindowsInformationProtectionPolicy[];
}
