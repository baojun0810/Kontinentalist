package com.interview.Kontinentalist.Model;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class Pagination {
    private int total_pages;
    private int start_page;
    private int end_page;
}
