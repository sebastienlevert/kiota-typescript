import {BaseCollectionPaginationCountResponse, ManagedAppDiagnosticStatus} from '../../../models/';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface GetManagedAppDiagnosticStatusesResponse extends BaseCollectionPaginationCountResponse, Partial<Parsable> {
    /** The value property */
    value?: ManagedAppDiagnosticStatus[];
}
