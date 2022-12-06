import {ManagedEBook} from './index';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface IosVppEBook extends ManagedEBook, Partial<Parsable> {
    /** The Apple ID associated with Vpp token. */
    appleId?: string;
    /** Genres. */
    genres?: string[];
    /** Language. */
    language?: string;
    /** Seller. */
    seller?: string;
    /** Total license count. */
    totalLicenseCount?: number;
    /** Used license count. */
    usedLicenseCount?: number;
    /** The Vpp token's organization name. */
    vppOrganizationName?: string;
    /** The Vpp token ID. */
    vppTokenId?: string;
}
