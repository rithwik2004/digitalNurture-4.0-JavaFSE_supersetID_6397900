package com.example;

import org.junit.jupiter.api.Test;
import static org.junit.jupiter.api.Assertions.*;

public class AssertionsTest {

    @Test
    public void testAssertEquals() {
        assertEquals(5, 2 + 3, "Expected 2 + 3 to equal 5");
    }

    @Test
    public void testAssertTrue() {
        assertTrue(5 > 3, "Expected 5 to be greater than 3");
    }

    @Test
    public void testAssertFalse() {
        assertFalse(5 < 3, "Expected 5 not to be less than 3");
    }

    @Test
    public void testAssertNull() {
        assertNull(null, "Expected value to be null");
    }

    @Test
    public void testAssertNotNull() {
        assertNotNull(new Object(), "Expected object to be not null");
    }
}


