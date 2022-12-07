import {AccessReviewScope} from './index';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface AccessReviewReviewerScope extends AccessReviewScope, Partial<Parsable> {
    /** The query specifying who will be the reviewer. */
    query?: string;
    /** In the scenario where reviewers need to be specified dynamically, this property is used to indicate the relative source of the query. This property is only required if a relative query, for example, ./manager, is specified. Possible value: decisions. */
    queryRoot?: string;
    /** The type of query. Examples include MicrosoftGraph and ARM. */
    queryType?: string;
}
