import Adapter from 'src/adapter';
import bidfactory from 'src/bidfactory';
import bidmanager from 'src/bidmanager';
import * as utils from 'src/utils';       // useful functions
import { ajax } from 'src/ajax';          // recommended AJAX library
import { STATUS } from 'src/constants';
import adaptermanager from 'src/adaptermanager';

const PofBidAdapter = function PofBidAdapter() {
    const baseAdapter = Adapter.createNew('pof');

}

function pofBidAdapter() {

    const BASE_URI = '//localhost:3030/ads'

    baseAdapter.callBids = function (params) {
        const data = {
            placements: [],
            time: Date.now(),
            url: utils.getTopWindowUrl(),
            referrer: document.referrer
        }
        
        // For each bid we want to get an ad and append it to data.placements
        bids = params.bids || [];
        for (let i = 0; i < bids.length; i++) {
            var bid = bids[i];
            
            
        }

        ajax(BASE_URI, _responseCallback, JSON.stringify(data), { 
            method: 'POST', 
            withCredentials: true, 
            contentType: 'application/json' 
        });
    }

    function _responseCallback(resp) {
        try {
            resp = JSON.parse(resp);
        } catch (error) {
            utils.logError(error);
        }
    }

    // Export the `callBids` function, so that Prebid.js can execute
    // this function when the page asks to send out bid requests.
    return {
        callBids: _callBids
    };

};


ServerBidAdapter.createNew = function() {
  return new ServerBidAdapter();
};

adaptermanager.registerBidAdapter(new PofBidAdapter, 'pof');
module.exports = PofBidAdapter;
