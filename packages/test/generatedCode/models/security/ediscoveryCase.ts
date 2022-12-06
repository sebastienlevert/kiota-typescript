import {IdentitySet} from '../';
import {Case_escaped, CaseOperation, EdiscoveryCaseSettings, EdiscoveryCustodian, EdiscoveryNoncustodialDataSource, EdiscoveryReviewSet, EdiscoveryReviewTag, EdiscoverySearch} from './index';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface EdiscoveryCase extends Case_escaped, Partial<Parsable> {
    /** The user who closed the case. */
    closedBy?: IdentitySet;
    /** The date and time when the case was closed. The Timestamp type represents date and time information using ISO 8601 format and is always in UTC time. For example, midnight UTC on Jan 1, 2014 is 2014-01-01T00:00:00Z */
    closedDateTime?: Date;
    /** Returns a list of case ediscoveryCustodian objects for this case. */
    custodians?: EdiscoveryCustodian[];
    /** The external case number for customer reference. */
    externalId?: string;
    /** Returns a list of case ediscoveryNoncustodialDataSource objects for this case. */
    noncustodialDataSources?: EdiscoveryNoncustodialDataSource[];
    /** Returns a list of case caseOperation objects for this case. */
    operations?: CaseOperation[];
    /** Returns a list of eDiscoveryReviewSet objects in the case. */
    reviewSets?: EdiscoveryReviewSet[];
    /** Returns a list of eDiscoverySearch objects associated with this case. */
    searches?: EdiscoverySearch[];
    /** Returns a list of eDIscoverySettings objects in the case. */
    settings?: EdiscoveryCaseSettings;
    /** Returns a list of ediscoveryReviewTag objects associated to this case. */
    tags?: EdiscoveryReviewTag[];
}
