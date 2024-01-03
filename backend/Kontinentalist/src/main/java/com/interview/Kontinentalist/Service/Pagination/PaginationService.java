package com.interview.Kontinentalist.Service.Pagination;

import com.interview.Kontinentalist.Model.Pagination;
import org.springframework.stereotype.Service;

@Service
public class PaginationService {

    public Pagination pagination(int totalItem, int pageNumber, int limit) {

        int pageSizes = (int) Math.ceil((double) totalItem / limit);
        int actualPage = pageNumber + 1;
        int startPage = 0;
        int endPage = 0;

        if(actualPage < 4){
            startPage = 1;

            if(actualPage + 2 >= pageSizes)
                endPage = pageSizes;
            else
                endPage = 5;
        }
        else if(actualPage > 3){
            if(actualPage + 2 > pageSizes){
                startPage = pageSizes - 4;
                endPage = pageSizes;
            }
            else {
                startPage = actualPage - 2;
                endPage = actualPage + 2;
            }
        }

        return new Pagination(pageSizes, startPage, endPage);
    }
}
