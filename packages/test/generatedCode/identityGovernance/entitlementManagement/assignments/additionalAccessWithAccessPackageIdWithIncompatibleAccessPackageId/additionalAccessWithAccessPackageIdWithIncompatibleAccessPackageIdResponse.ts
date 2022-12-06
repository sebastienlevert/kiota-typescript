import {AccessPackageAssignment, BaseCollectionPaginationCountResponse} from '../../../../models/';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface AdditionalAccessWithAccessPackageIdWithIncompatibleAccessPackageIdResponse extends BaseCollectionPaginationCountResponse, Partial<Parsable> {
    /** The value property */
    value?: AccessPackageAssignment[];
}
