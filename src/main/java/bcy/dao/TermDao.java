package bcy.dao;

import java.util.List;

import org.apache.ibatis.annotations.Mapper;

@Mapper
public interface TermDao {
    public Integer addTerm(Term team);

    public List<Term> getTerms(Long uid);
}
