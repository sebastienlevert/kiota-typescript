import {Entity} from './index';
import {VppTokenAccountType} from './vppTokenAccountType';
import {VppTokenState} from './vppTokenState';
import {VppTokenSyncStatus} from './vppTokenSyncStatus';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface VppToken extends Entity, Partial<Parsable> {
    /** The apple Id associated with the given Apple Volume Purchase Program Token. */
    appleId?: string;
    /** Whether or not apps for the VPP token will be automatically updated. */
    automaticallyUpdateApps?: boolean;
    /** Whether or not apps for the VPP token will be automatically updated. */
    countryOrRegion?: string;
    /** The expiration date time of the Apple Volume Purchase Program Token. */
    expirationDateTime?: Date;
    /** Last modification date time associated with the Apple Volume Purchase Program Token. */
    lastModifiedDateTime?: Date;
    /** The last time when an application sync was done with the Apple volume purchase program service using the the Apple Volume Purchase Program Token. */
    lastSyncDateTime?: Date;
    /** Possible sync statuses associated with an Apple Volume Purchase Program token. */
    lastSyncStatus?: VppTokenSyncStatus;
    /** The organization associated with the Apple Volume Purchase Program Token */
    organizationName?: string;
    /** Possible states associated with an Apple Volume Purchase Program token. */
    state?: VppTokenState;
    /** The Apple Volume Purchase Program Token string downloaded from the Apple Volume Purchase Program. */
    token?: string;
    /** Possible types of an Apple Volume Purchase Program token. */
    vppTokenAccountType?: VppTokenAccountType;
}
