import {PrintUsage} from './index';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface PrintUsageByUser extends Partial<Parsable>, PrintUsage {
    /** The UPN of the user represented by these statistics. */
    userPrincipalName?: string;
}
